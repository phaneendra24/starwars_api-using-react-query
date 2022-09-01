function Person({ people }) {
    console.log(people);
    return (
        <>
            <div className="w-2/3 h-20 mb-4 mt-5 bg-black pl-5 text-yellow-500 text-start">
                <h1 className="font-extrabold">{people.name}</h1>
                <p className="text-gray-500 font-bold">{people.gender}</p>
                <p className="text-gray-500 font-bold">{people.birth_year}</p>
            </div>

        </>
    )
}

export { Person }