export default  {
    name:'Posts',
    title:'posts',
    type:'document',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Name'
        },
        {
        name:'heading',
        type:'string',
        title:'Heading'
    },
    {
        name:'body',
        type: 'text',
        row:2,
        title:'Body' 
    },
    {
        name:'links',
        type:'url',
        title:'Links'
    }
    ]
    
    }