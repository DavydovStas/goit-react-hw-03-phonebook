export default function contactsMarkup({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ name, id, number }) => {
        return (
          <li className="contact-item" key={id}>
            {name}: {number}
            <button
              className="contact-item-button"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
