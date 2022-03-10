import { Wrapper, Content, StyledLink } from './Grid.styles';

function Grid({
    header,
    children,
    path,
    icon,
    sliding,
    slidingAtAll,
    fullscreen,
}) {
    return (
        <Wrapper className={fullscreen ? 'fullscreen' : ''}>
            <div className='headerBox'>
                <img src={icon} alt='reel-icon'></img>
                <h2>{header}</h2>
                {path ? <StyledLink to={path}>See More</StyledLink> : ''}
            </div>
            <Content
                className={
                    sliding ? 'sliding' : slidingAtAll ? 'slidingAtAll' : ''
                }
            >
                {children}
            </Content>
        </Wrapper>
    );
}

export default Grid;
