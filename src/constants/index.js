export const API_URL = "https://63593d13c27556d2894f77ef.mockapi.io/";
export const URIs = ["contacts", "users", "posts"];

export const CONTACTS_URI = "contacts";
export const USERS_URI = "users";
export const POSTS_URI = "posts";

export const CONTACTS_PAGE = "contacts";
export const USERS_PAGE = "users";
export const POSTS_PAGE = "posts";

export const EMPTY_CONTACT = () => {
    return {
      name: "",
      surname: "",
      phone: "",
    };
};

export const EMPTY_USER = () => {
    return {
      avatar: "",
      name: "",
      surname: "",
      country: "",
      city: "",
    };
}

export const EMPTY_POST = () => {
    return {
      image: "",
      author: "",
      title: "",
      text: "",
    };
}