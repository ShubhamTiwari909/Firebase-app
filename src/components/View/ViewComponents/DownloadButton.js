import onButtonClick from '../../EventHandler/DownloadImage';

function DownloadButton({ reference, downloadsNumber, uniqueId }) {
    return (
        <div>
            <div className="justify-center items-center mt-2 sm:flex sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                    <div className="text-left">
                        <button
                            onClick={() => {
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1200);
                                onButtonClick(reference, downloadsNumber, uniqueId)
                            }}>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadButton