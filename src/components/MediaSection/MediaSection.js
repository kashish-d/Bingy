import Grid from '../Grid/Grid';
import VideoFrame from '../VideoFrame/VideoFrame';
import { Wrapper } from './MediaSection.styles';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import VideoSecIcon from '../../images/video-marketing.png';

function MediaSection({ videos }) {
    const youtubeVideos = videos.filter((video) => video.site === 'YouTube');
    const [videoKey, setVideoKey] = useState();
    if (youtubeVideos.length === 0) return '';
    return (
        <>
            <Grid header={'Videos'} icon={VideoSecIcon} slidingAtAll>
                {youtubeVideos.map((video) => {
                    return (
                        <Wrapper
                            key={video.id}
                            data-key={video.key}
                            image={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
                        >
                            <span
                                data-key={video.key}
                                className='play'
                                onClick={(e) => {
                                    setVideoKey(
                                        e.target.getAttribute('data-key')
                                    );
                                }}
                            ></span>
                        </Wrapper>
                    );
                })}
            </Grid>
            <Modal
                isOpen={videoKey ? true : false}
                callback={() => setVideoKey('')}
            >
                <VideoFrame videoKey={videoKey} />
            </Modal>
        </>
    );
}
export default MediaSection;
