import axios from 'axios';
const url = 'http://localhost:3001';

// GET ALL WINE TASTINGS FROM DB
async function getTastings(id:number) {
  try {
    const response = await axios.get(url + '/api/tastings/' + id);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// POST ONE TASTING TO DB
function postTasting(options:any) {
  axios.post(url + '/api/tastings', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//DELETE TASTING BY ID
function deleteTasting(id:number) {
  axios.delete(url + '/api/tastings/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// CREATE NEW USER
function postUser(options:{mail: string, password: string}) {
  axios.post(url + '/api/user', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// GET ALL USERS
async function getUsers() {
  try {
    const response = await axios.get(url + '/api/allusers');
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
// GET BY EMAIL
async function getUserByMail(mail:string) {
  try {
    const response = await axios.get(url + '/api/findByMail/'+mail);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export default { getTastings, postTasting, deleteTasting, postUser, getUsers, getUserByMail };


