import baseUrl from "./baseUrl";

class ApiServices {
  async category() {
    const response = await fetch(`${baseUrl}/hackathon/categories-list`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const successRes = await response.json();
      return { data: successRes, status: true };
    }

    return { message: "unable to get category" };
  }

  async contact(data) {
    const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const successRes = await response.json();
      return { data: successRes, status: true };
    }

    return { message: "unable to submit" };
  }

  async register(data) {
    const response = await fetch(`${baseUrl}/hackathon/registration`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const successRes = await response.json();
      return { data: successRes, status: true };
    }

    return { message: "unable to register" };
  }
}

const instance = new ApiServices();
export default instance;
