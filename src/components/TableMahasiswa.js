import { Button, Card, Container, Table, Form } from "react-bootstrap";
import { FaTrashAlt, FaPen, FaPlus, FaUndo } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function TableMahasiswa() {
  const API_URL = "http://localhost:5984/mahasiswas/_find";
  const username = "admin";
  const password = "password";
  const [mahasiswa, setMahasiswa] = useState([]);
  const data = {
    selector: {
      _id: {
        $gt: null,
      },
    },
  };
  useEffect(() => {
    axios
      .post(API_URL, data, {
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
      });
  }, [mahasiswa]);
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
              {mahasiswa.map((items) => (
                <tr>
                  <td>{items._id}</td>
                  <td>{items.nim}</td>
                  <td>{items.nama}</td>
                  <td>{items.email}</td>
                  <td>{items.telp}</td>
                  <td>
                    <Button variant="success" size="sm" className="pt-0 m-1">
                      <FaPen />
                    </Button>
                    <Button variant="danger" size="sm" className="pt-0 m-1">
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td className="">
                  <Button variant="primary" size="sm" className="pt-0 m-1">
                    <FaPlus />
                  </Button>
                  <Button variant="secondary" size="sm" className="pt-0 m-1">
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
