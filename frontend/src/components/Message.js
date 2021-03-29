import { Alert } from 'react-bootstrap';

function Message({ children, variant }) {
  return <Alert variant={variant}>{children}</Alert>;
}

Message.defaultProps = {
  variant: 'danger',
};

export default Message;
