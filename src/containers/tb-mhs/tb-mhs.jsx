import { Component } from "react";
import $ from "jquery";
import { } from "datatables.net-bs5";
import "bootstrap/dist/css/bootstrap.css";

class TableMahasiswa extends Component {
    componentDidMount() {
        $(() => {
            $('#table-mhs').DataTable({
                destroy: true,
                ajax: {
                    url: "http://10.28.1.86/restapi-oop/objects/data_mhs.php",
                    dataSrc: ''
                },
                columns: [
                    { data: "nim" },
                    { data: "nama" },
                    { data: "jenis_kelamin" },
                    { data: "tempat_lahir" },
                    { data: "tanggal_lahir" },
                    { data: "alamat" },
                ],
            });
        })
    }

    render() {
        return (
            <div className="container p-4">
                <h1 className="mb-3">Data Mahasiswa</h1>
                <table id="table-mhs" className="table table-striped">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jenis Kelamin</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TableMahasiswa;