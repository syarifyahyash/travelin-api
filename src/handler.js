const { nanoid } = require('nanoid');
const cultures = require('./data');

const addCultureHandler = (request, h) => {
  const { name, description, province, address, image } = request.payload;

  if (!name || !description || !province || !address || !image) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan budaya. Mohon isi semua field yang diperlukan',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const newCulture = {
    id, name, description, province, address, image,
  };

  cultures.push(newCulture);

  const isSuccess = cultures.filter((culture) => culture.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Budaya berhasil ditambahkan',
      data: {
        cultureId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Budaya gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllCulturesHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      cultures,
    },
  });
  response.code(200);
  return response;
};

const getCultureByIdHandler = (request, h) => {
  const { cultureId } = request.params;
  const culture = cultures.find((c) => c.id === cultureId);

  if (culture) {
    const response = h.response({
      status: 'success',
      data: {
        culture,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Budaya tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editCultureByIdHandler = (request, h) => {
  const { cultureId } = request.params;
  const { name, description, province, address, image } = request.payload;

  if (!name || !description || !province || !address || !image) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui budaya. Mohon isi semua field yang diperlukan',
    });
    response.code(400);
    return response;
  }

  const index = cultures.findIndex((culture) => culture.id === cultureId);

  if (index !== -1) {
    cultures[index] = {
      ...cultures[index],
      name,
      description,
      province,
      address,
      image,
    };

    const response = h.response({
      status: 'success',
      message: 'Budaya berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui budaya. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteCultureByIdHandler = (request, h) => {
  const { cultureId } = request.params;
  const index = cultures.findIndex((culture) => culture.id === cultureId);

  if (index !== -1) {
    cultures.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Budaya berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Budaya gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addCultureHandler, getAllCulturesHandler, getCultureByIdHandler, editCultureByIdHandler, deleteCultureByIdHandler };
