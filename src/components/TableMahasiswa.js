import { Button, Card, Container, Table, Form } from "react-bootstrap";
import { FaTrashAlt, FaPen, FaPlus, FaUndo } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function TableMahasiswa() {
  const API_URL = "http://localhost:5984/mahasiswas/";
  const username = "admin";
  const password = "password";
  const [_id, setId] = useState("");
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [mahasiswa, setMahasiswa] = useState([]);
  const [edit, isEdit] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [editData, setEditData] = useState({
    _id: "10",
    nim: "1207050041",
    nama: "Frinaldi Syauqi",
    email: "frinaldi@mail.com",
    telp: "089518928586",
  });

  useEffect(() => {
    const data = {
      selector: {
        _id: {
          $gt: null,
        },
      },
    };
    axios
      .post(`${API_URL}/_find`, data, {
        headers: {
          "content-type": "application/json",
        },
        auth: {
          username: username,
          password: password,
        },
      })
      .then((res) => {
        setMahasiswa(res.data.docs);
        var count = Object.keys(res.data.docs).length;
        setId(count);
      });
  }, [mahasiswa]);

  const postData = (e) => {
    e.preventDefault();
    try {
      axios.put(
        `${API_URL}/${_id + 1}`,
        {
          nim: nim,
          nama: nama,
          email: email,
          telp: telp,
        },
        {
          headers: {
            "content-type": "application/json",
          },
          auth: {
            username: username,
            password: password,
          },
        }
      );
    } catch (error) {
      if (error.response) {
      }
    }
  };

  const resetForm = () => {
    setNim("");
    setNama("");
    setEmail("");
    setTelp("");
  };

  const deleteData = (id, rev) => {
    axios.delete(`${API_URL}${id}/?rev=${rev}`, {
      auth: {
        username: username,
        password: password,
      },
    });
  };

  console.log("edit adalah " + edit);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h5">Tabel Mahasiswa</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>NIM</th>
                <th>Nama</th>
                <th>E-Mail</th>
                <th>No. HP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {edit === true ? (
                <tr>
                  <td></td>
                  <td>
                    <Form.Control
                      type="text"
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={telp}
                      onChange={(e) => setTelp(e.target.value)}
                    />
                  </td>
                  <td className="">
                    <Button
                      variant="primary"
                      size="sm"
                      className="pt-0 m-1"
                      onClick={postData}
                    >
                      <FaPlus />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="pt-0 m-1"
                      onClick={resetForm}
                    >
                      <FaUndo />
                    </Button>
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td>1</td>
                    <td>1207050042</td>
                    <td>Gaduh Hartawan</td>
                    <td>gaduh@mail.com</td>
                    <td>087821314215</td>
                    <td>
                      <Button
                        variant="success"
                        size="sm"
                        className="pt-0 m-1"
                        onClick={() => isEdit(true)}
                      >
                        <FaPen />
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="pt-0 m-1"
                        // onClick={() => deleteData(items._id, items._rev)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                </>
              )}
              {mahasiswa.map((items) => (
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>{items.nim}</td>
                  <td>{items.nama}</td>
                  <td>{items.email}</td>
                  <td>{items.telp}</td>
                  <td>
                    <Button variant="success" size="sm" className="pt-0 m-1">
                      <FaPen />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="pt-0 m-1"
                      onClick={() => deleteData(items._id, items._rev)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <Form.Control
                    type="text"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                  />
                </td>
                <td className="">
                  <Button
                    variant="primary"
                    size="sm"
                    className="pt-0 m-1"
                    onClick={postData}
                  >
                    <FaPlus />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="pt-0 m-1"
                    onClick={resetForm}
                  >
                    <FaUndo />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TableMahasiswa;
