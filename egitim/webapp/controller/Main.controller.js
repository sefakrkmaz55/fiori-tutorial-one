sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Icon"
],
function (Controller, MessageBox, Icon) {
    "use strict";

    return Controller.extend("com.mm.egitim.controller.Main", {
        onInit: function () {
        },

        onAddPersonnel: function () {
            var firstName = this.byId("firstName").getValue();
            var lastName = this.byId("lastName").getValue();
            var department = this.byId("department").getValue();
            var phone = this.byId("phone").getValue();
            var email = this.byId("email").getValue();

            if (!firstName || !lastName) {
                MessageBox.error("İsim ve Soyisim alanları zorunludur!");
                return;
            }

            var resultText = "Ad: " + firstName + "\n" +
                           "Soyad: " + lastName + "\n" +
                           "Bölüm: " + department + "\n" +
                           "Telefon: " + phone + "\n" +
                           "E-mail: " + email;

            this.byId("resultText").setText(resultText);
            this.byId("resultArea").setVisible(true);

            this.changeIconColor("employee", "#4CAF50");
        },

        onClear: function () {
            this.byId("firstName").setValue("");
            this.byId("lastName").setValue("");
            this.byId("department").setValue("");
            this.byId("phone").setValue("");
            this.byId("email").setValue("");
            this.byId("resultArea").setVisible(false);
            this.changeIconColor("employee", "#F44336");
        },

        onShowInPopup: function () {
            var firstName = this.byId("firstName").getValue();
            var lastName = this.byId("lastName").getValue();
            var department = this.byId("department").getValue();
            var phone = this.byId("phone").getValue();
            var email = this.byId("email").getValue();

            var message = "Ad: " + firstName + "\n" +
                         "Soyad: " + lastName + "\n" +
                         "Bölüm: " + department + "\n" +
                         "Telefon: " + phone + "\n" +
                         "E-mail: " + email;

            MessageBox.information(message, {
                title: "Girilen Veriler"
            });
        },

        changeIconColor: function (iconId, color) {
        }
    });
});
