import { Button, Card, Container, Table, Form } from "react-bootstrap";
import { FaTrashAlt, FaPen, FaPlus, FaUndo } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function TableMahasiswa() {
  const API_URL = "http://localhost:5984";
  const [mahasiswa, setMahasiswa] = useState([]);
  useEffect(() => {
    axios.post(`${API_URL}/mahasiswas/_find`);
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
              <tr>
                <td>1</td>
                <td>1207050041</td>
                <td>Sugma</td>
                <td>Sugma@mail.com</td>
                <td>08951092123</td>
                <td>
                  <Button variant="success" size="sm" className="pt-0 m-1">
                    <FaPen />
                  </Button>
                  <Button variant="danger" size="sm" className="pt-0 m-1">
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
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
