/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login-action";
import { ProdukAction } from "../../actions/produk-action";
import { ProdukForm } from "../../page-objects/produk-form";

describe(" Tambah Produk", () => {
  const login = new LoginAction();
  const Produk = new ProdukAction();
  const produkForm = new ProdukForm();

  beforeEach(() => {
    login.withCredentials("alfathzain3@gmail.com", "bangka123");
  });

  describe("Tambah Kategori Product", () => {
    it("Input Produk", () => {
      Produk.withCredentials("001", "Kopi Susu", "Dari Biji Kopi Pilihan", "10000", "15000", "25", "Kopi");
      produkForm.successMessage().should("contain", "item ditambahkan");
    });

    it("Input Produk Not Input Name", () => {
      Produk.notinputName("001", "Kopi Susu", "Dari Biji Kopi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotName().should("contain", '"name" is not allowed to be empty');
    });

    it("Input Produk Not Input Harga Beli", () => {
      Produk.notinputhargaBeli("001", "Kopi Susu", "Dari Biji Kopi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotHargabeli().should("contain", '"cost" must be a number');
    });

    it("Input Produk Not Input Harga Jual", () => {
      Produk.notinputhargaJual("001", "Kopi Susu", "Dari Biji Kopi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotHargajual().should("contain", '"price" must be a number');
    });

    it("Input Produk Not Kategori", () => {
      Produk.notinputKategori("001", "Kopi Susu", "Dari Biji Kopi Pilihan", "10000", "15000", "25");
      produkForm.erorMessagenotKategori().should("contain", '"category_id" is required');
    });
  });
});
