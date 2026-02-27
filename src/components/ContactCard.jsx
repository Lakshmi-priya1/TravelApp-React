function ContactCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card contact-card shadow-sm p-4 text-center h-100">
        <h5 className="fw-semibold">{props.title}</h5>
        <p className="text-muted mt-2">{props.value}</p>
      </div>
    </div>
  );
}

export default ContactCard;