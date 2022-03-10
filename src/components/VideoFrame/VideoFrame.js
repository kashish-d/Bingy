import { Video } from './VideoFrame.styles';

function VideoFrame({ videoKey }) {
    return (
        <Video className='youtube'>
            <iframe
                src={'https://www.youtube-nocookie.com/embed/' + videoKey}
                frameBorder='0'
                allow='fullscreen; encrypted-media'
                loading='lazy'
                title='video'
            />
        </Video>
    );
}
export default VideoFrame;
