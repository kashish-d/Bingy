import { Wrapper, Content } from './Modal.styles';

function Modal({ children, isOpen, callback }) {
    return (
        <Wrapper className={isOpen ? 'active' : ''}>
            <Content>
                {children}
                <h1 onClick={callback}>×</h1>
            </Content>
        </Wrapper>
    );
}
export default Modal;
