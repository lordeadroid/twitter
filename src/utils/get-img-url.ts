/* eslint-disable max-len */

const getImgURL = () => {
  const id = Math.ceil(Math.random() * 10);

  const avatar = `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${id}.png`;
  const background =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";

  return { avatar, background };
};

export default getImgURL;
