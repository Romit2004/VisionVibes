import React, { useState } from 'react'
import usePublishVideo from '../../hooks/usePublishVideo'
import { useNavigate } from 'react-router';

const VideoUpload = () => {

    const [inputs, setInputs] = useState({ title: "", description: "", video: "", thumbnail: "" })
    const {loading,publish} = usePublishVideo();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        await publish(inputs)
        setInputs({ title: "", description: "", video: "", thumbnail: "" })
    }


    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='h-auto w-auto border-2 shadow-3xl border-red-600 rounded-md max-h-[494px] mt-10'>
                <form className='p-6' onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Write title"
                            value={inputs.title}
                            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                            className="input input-bordered input-error md:w-96 sm:w-auto max-w-xs text-red-400" />
                    </div>
                    <div className="divider divider-error"></div>
                    <div>
                        <textarea
                            placeholder="Write description"
                            value={inputs.description}
                            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                            className="textarea textarea-bordered textarea-error w-full max-w-xs text-red-400"
                            rows={3} // Adjust the rows for initial height
                        />
                    </div>
                    <div className="divider divider-error"></div>

                    <div>
                        <input
                            type="file"
                            id="upload-video"
                            
                            onChange={(e) => setInputs({ ...inputs, video: e.target.files[0] })}
                            className="hidden"
                        />
                        <label
                            htmlFor="upload-video"
                            className="block cursor-pointer border border-red-500 text-red-500 text-center py-2 px-4 rounded w-full hover:bg-red-100 transition"
                        >
                            {inputs.video===""? "Upload video" : "Video uploaded"}
                        </label>
                    </div>
                    <div className="divider divider-error"></div>

                    <div>
                        <input
                            type="file"
                            id="upload-avatar"
                            
                            onChange={(e) => setInputs({ ...inputs, thumbnail: e.target.files[0] })}
                            className="hidden"
                        />
                        <label
                            htmlFor="upload-avatar"
                            className="block cursor-pointer border border-red-500 text-red-500 text-center py-2 px-4 rounded w-full hover:bg-red-100 transition">
                                 {inputs.thumbnail===""? "Upload thumbnail" : "Thumbnail uploaded"}
                        </label>
                    </div>
                    
                    <div className='flex justify-center mt-4'>
                    <button className="btn btn-outline btn-error">Submit</button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default VideoUpload
