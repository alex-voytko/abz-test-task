import Image from "../Image";

function UserItem({ photo, name, position, email, phone }) {
  return (
    <li className="item">
      <Image src={photo} alt={name} />
      <p className="name">{name}</p>
      <p className="position">{position}</p>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </li>
  );
}

export default UserItem;
