import React from "react";

const RowMhs = ({ nim, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, alamat }) => {
    return (
        <tr>
            <td>{nim}</td>
            <td>{nama}</td>
            <td>{jenis_kelamin}</td>
            <td>{tempat_lahir}</td>
            <td>{tanggal_lahir}</td>
            <td>{alamat}</td>
        </tr>
    )
}

RowMhs.defaultProps = {
    nim: "00000",
    nama: "null",
    jenis_kelamin: "pria / wanita",
    tempat_lahir: "null",
    tanggal_lahir: "00, 00, 0000",
    alamat: "null"
}

export default RowMhs;
