const originalArray = [
    {
        "id": 1234,
        "apellidoPat": "Campos",
        "apellidoMat": "Meza",
        "nombre": "Juan",
        "fecha": "01-04-2022",
        "observacion": "llego temprano"
    },
    {
        "id": 1234,
        "apellidoPat": "Campos",
        "apellidoMat": "Meza",
        "nombre": "Juan",
        "fecha": "02-04-2022",
        "observacion": "llego tarde"
    },
    {
        "id": 1244,
        "apellidoPat": "Mesa",
        "apellidoMat": "Gonzalez",
        "nombre": "David",
        "fecha": "02-04-2022",
        "observacion": "llego tarde"
    }
];

function groupById(array) {
    return array.reduce((acc, current) => {
        const foundItem = acc.find(it => it.id === current.id);

        if (foundItem) {
            foundItem.data = foundItem.data
                ? [...foundItem.data, { 'fecha': current.fecha, 'observacion': current.observacion }]
                : [{ 'fecha': current.fecha, 'observacion': current.observacion }];
        } else { 
            acc.push({
                'id': current.id,
                'apellidoPat': current.apellidoPat,
                'apellidoMat': current.apellidoMat,
                'nombre': current.nombre,
                'data': [{ 'fecha': current.fecha, 'observacion': current.observacion }]
            });
        }
        return acc;
    }, []);
}

console.log(groupById(originalArray));