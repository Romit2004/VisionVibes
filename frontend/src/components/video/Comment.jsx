import React from 'react'

const Comment = ({ comment, avatar, owner }) => {
  return (
    <div>
      <div className='mt-2 mb-8'>
        <div className="avatar">
          <div className="w-8 rounded-3xl h-8">
            <img src={avatar} alt='user' />
          </div>
          <div className='ml-2 text-xl'>
            <h1 className='text-red-500'>
              {owner}
            </h1>
          </div>

        </div>
        <div>
          {comment}
        </div>

        <div className="divider"></div>

      </div>

    </div>

  )
}

export default Comment
