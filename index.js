const fetch = require("node-fetch");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

const generateIndoName = () =>
  new Promise((resolve, reject) => {
    fetch("https://swappery.site/data.php?qty=1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const cokie = () =>
  new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/", {
      body: null,
      method: "GET",
    })
      .then((text) => {
        resolve(text.headers.raw()["set-cookie"]);
      })
      .catch((err) => reject(err));
  });
const headcreate = (cookiee, cookiee1, cookiee2, cookiee3) => ({
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "x-csrftoken": cookiee.split("=")[1],
    "x-requested-with": "XMLHttpRequest",
    cookie: `${cookiee}; ${cookiee1}; ${cookiee2}; ${cookiee3}`,
  },
});
const crerateusername = (headers, namee, email) =>
  new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
      headers: headers,
      body: `email=${encodeURIComponent(
        email
      )}&username=${namee}&first_name=${namee}&opt_into_one_tap=false`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const create = (headers, namee, email, username, idtoken, password) =>
  new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/accounts/web_create_ajax/attempt/", {
      headers: headers,
      body: `enc_password=%23PWD_INSTAGRAM_BROWSER%3A10%3A1646495203%3AAatQAN2WzcWmXONhLMw41PJC6K%2BNHh%2BXIok7KXf3Twqh39RDkKB84dTyuVO%2BrIg%2BQuYsoIspeJNobJjLv8cfA7eb4hczOkW4EXhTdTP4dCOb8EQdjXff5WiW5uHbiOuQEX0eAJLnZQSZrbyWuw%3D%3D&email=${encodeURIComponent(
        email
      )}&username=${username}&first_name=${namee}&client_id=${idtoken}&seamless_login_enabled=1&opt_into_one_tap=false`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const tgllahir = (headers) =>
  new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/web/consent/check_age_eligibility/", {
      headers: headers,
      body: "day=21&month=9&year=1982",
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const reqotpemail = (headers, email, idtoken) =>
  new Promise((resolve, reject) => {
    fetch("https://i.instagram.com/api/v1/accounts/send_verify_email/", {
      headers: headers,
      body: `device_id=${idtoken}&email=${encodeURIComponent(email)}`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const confirmotp = (headers, email, idtoken, otp) =>
  new Promise((resolve, reject) => {
    fetch("https://i.instagram.com/api/v1/accounts/check_confirmation_code/", {
      headers: headers,
      body: `code=${otp}&device_id=${idtoken}&email=${encodeURIComponent(
        email
      )}`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const createlast = (headers, email, username, namee, idtoken, code, password) =>
  new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/accounts/web_create_ajax/", {
      headers: headers,
      body: `enc_password=%23PWD_INSTAGRAM_BROWSER%3A10%3A1646495203%3AAatQAN2WzcWmXONhLMw41PJC6K%2BNHh%2BXIok7KXf3Twqh39RDkKB84dTyuVO%2BrIg%2BQuYsoIspeJNobJjLv8cfA7eb4hczOkW4EXhTdTP4dCOb8EQdjXff5WiW5uHbiOuQEX0eAJLnZQSZrbyWuw%3D%3D&email=${encodeURIComponent(
        email
      )}&username=${username}&first_name=${namee}&month=9&day=21&year=1982&client_id=${idtoken}&seamless_login_enabled=1&tos_version=row&force_sign_up_code=${code}`,
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

(async () => {
  console.log(
    chalk.green(`
  =================================================
  =============== Instagram Creator ===============
  ================================================= 
  
  Pilih Menu 
  1. Create with Password Default [ Ampas123@ ]
  `)
  );
  const choice = readlineSync.question(
    chalk.green("[?] ") + "Masukan Menu [1/2] : "
  );
  if (choice == "1") {
    const mail = readlineSync.question(chalk.green("[+] ") + "Input Email : ");
    const indoName = await generateIndoName();
    const { result } = indoName;
    const name =
      result[0].firstname.toLowerCase() + result[0].lastname.toLowerCase();
    const email = mail;
    const csrff = await cokie();
    const csrf = csrff[7].split(";")[0];
    const csrf1 = csrff[8].split(";")[0];
    const csrf2 = csrff[9].split(";")[0];
    const csrf3 = csrff[10].split(";")[0];
    const headerscreate = headcreate(csrf, csrf1, csrf2, csrf3);
    const createusername = await crerateusername(
      headerscreate["headers"],
      name,
      email
    );
    if (createusername["status"] == "ok") {
      console.log(chalk.green("[+] ") + "Generate Username");
      const cek = createusername.username_suggestions;
      const pilih = cek[Math.floor(Math.random() * cek.length)];
      const usernamesugestion = pilih;
      console.log(
        chalk.green("[+] ") + `Accept Username => ` + usernamesugestion
      );
      const createaccount = await create(
        headerscreate["headers"],
        name,
        email,
        usernamesugestion,
        csrf1
      );
      if (createaccount["status"] == "ok") {
        const tgllahiradd = await tgllahir(headerscreate["headers"]);
        const reqotpx = await reqotpemail(
          headerscreate["headers"],
          email,
          csrf1
        );
        const otpx = readlineSync.question(
          chalk.green("[+] ") + "OTP Email : "
        );
        const confirm = await confirmotp(
          headerscreate["headers"],
          email,
          csrf1,
          otpx
        );
        const createaccountlast = await createlast(
          headerscreate["headers"],
          email,
          usernamesugestion,
          name,
          csrf1,
          confirm["signup_code"]
        );
        if (createaccountlast["status"] == "ok") {
          console.log(chalk.green("[+] ") + "Create Succesfully !");
        } else {
          console.log(chalk.red("[+]") + JSON.stringify(createaccountlast));
        }
      } else {
        console.log(chalk.red("[+]") + JSON.stringify(createaccount));
      }
    } else {
      console.log(chalk.red("[+]") + JSON.stringify(createusername));
    }
  } else {
    console.log(chalk.red("[+] !!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
  }
})();
