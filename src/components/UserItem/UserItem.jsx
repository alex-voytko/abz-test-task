// import "../../images/svg/";

function UserItem({ photo, name, position, email, phone }) {
  return (
    <li className="item">
      <img
        src={photo}
        alt={name}
        onerror={`this.src='../../images/hero-img.jpeg';`}
      />
      <p className="name">{name}</p>
      <p className="position">{position}</p>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </li>
  );
}

export default UserItem;
