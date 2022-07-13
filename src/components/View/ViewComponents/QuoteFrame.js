import React from 'react'

function QuoteFrame({reference,bgColor,textColor,Title,Description,Date,Name}) {
    return (
        <div>
            <div ref={reference}
                className={`p-4 w-full text-center ${bgColor} rounded-lg border shadow-md sm:p-8`}>
                <h5 className={`mb-2 text-3xl font-bold ${textColor}`}>{Title}</h5>
                <p className={`mb-3 text-base ${textColor} sm:text-lg break-words`}>{Description}</p>
                <p className={`mb-2 ${textColor} text-sm `}>{Date}</p>
                <h1 className={`my-3 ml-1 text-lg font-bold ${textColor}`}>
                    By - {Name}
                </h1>
            </div>
        </div>
    )
}

export default QuoteFrame