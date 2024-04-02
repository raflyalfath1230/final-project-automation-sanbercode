/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login-action";
import { KategoriAction } from "../../actions/kategori-action";
import { KategoriForm } from "../../page-objects/kategori-form";

describe("Tambah Kategori ", () => {
  const login = new LoginAction();
  const Kategori = new KategoriAction();
  const kategoriForm = new KategoriForm();

  beforeEach(() => {
    login.withCredentials("alfathzain3@gmail.com", "bangka123");
  });

  describe("Tambah Kategori Product", () => {
    it("Input Kategori", () => {
      Kategori.withCredentials("Kopi", "Kopi Susu");
      kategoriForm.successMessage().should("contain", "item ditambahkan");
    });

    it("Input Kategori Empty", () => {
      Kategori.withEmpty("Kopi", "Kopi Aren");
      kategoriForm.errorMessage().should("contain", '"name" is not allowed to be empty');
    });
  });
});
