function Singleplanet({ planet }) {
    console.log(planet);
    return (
        <>
            <div className="w-2/3 h-20 mb-4 mt-5 bg-black pl-5 text-yellow-500 text-start">
                <h1 className="font-extrabold">{planet.name}</h1>
                <p className="text-gray-500 font-bold">{planet.population}</p>
                <p className="text-gray-500 font-bold">{planet.terrain}</p>
            </div>

        </>
    )
}

export { Singleplanet }