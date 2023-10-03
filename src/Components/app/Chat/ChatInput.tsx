import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
    return (
        <div className='absolute bottom-0 w-full '>
           <div className='flex '>
           <input type="text" placeholder='write your text here' className='w-full rounded-lg-l  border py-1.5 ps-2 bg-transparent' />
            <button className='bg-red-500 px-4 py-2 rounded'><SendIcon/></button>
           </div>
        </div>
    );
};

export default ChatInput;