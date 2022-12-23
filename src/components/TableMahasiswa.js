import { Button, Card, Container, Table, Form } from "react-bootstrap";
import { FaPlus, FaUndo } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import DataMahasiswa from "./DataMahasiswa";

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

  function getData() {
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
  }

  useEffect(() => {
    getData();
  }, [mahasiswa]);

  const postData = () => {
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
              {mahasiswa.map((items) => {
                return (
                  <DataMahasiswa
                    _id={items._id}
                    nim={items.nim}
                    nama={items.nama}
                    email={items.email}
                    telp={items.telp}
                    _rev={items._rev}
                  />
                );
              })}
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
