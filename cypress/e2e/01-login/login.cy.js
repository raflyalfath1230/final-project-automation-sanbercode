/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login-action";
import { LoginForm } from "../../page-objects/login-form";
import { PageHeader } from "../../page-objects/page-header";


describe("Login Toko and Kasir", () => {
  const login = new LoginAction();
  const loginForm = new LoginForm();
  const pageHeader = new PageHeader();

  describe("with a valid user account", () => {
    it("With valid credentials at TOKO", () => {
      cy.clearLocalStorage();
      login.withCredentials("alfathzain3@gmail.com", "bangka123");
      pageHeader.titleUsertoko().should("have.text", "Kopi Nekangan");
    });

    it("With valid credentials at User TOKO", () => {
      login.withCredentials("alfathzain33@gmail.com", "bangka123");
      pageHeader.titleUserkasir().should("have.text", "kasir");
    });

    it("With an incorrect username", () => {
      login.withCredentials("EMAIL_SALAH@gmail.com", "bangka123");
      loginForm.errorMessage().should("contain", "Kredensial yang Anda berikan salah");
    });
  });
});
