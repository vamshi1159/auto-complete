import { Chip, makeStyles, TextField, withStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles((theme) => ({   
    option: {
        "&:hover": {
            backgroundColor:'#ff970f'
        }
    },
    inputRoot: {  
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: '#ff970f'
      }
    },  
  }));

 const StyleChip = withStyles({
    root:{     
       backgroundColor: '#ff970f'
    },
    deleteIcon:{
        color:'white'
    }
})(Chip);
export const AutoComplete = () => {
    const classes=useStyles();

    const films=[
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 }
    ];
const handleChange=(e)=>{
    console.log('clicked')
}
     return <Autocomplete
        data-testid='id'
            multiple
            classes={classes}
            options={films.map((option) => option.title)}
            defaultValue={[films[13].title]}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                <StyleChip variant="outlined" label={option} data-testid={index} {...getTagProps({ index })} />
                ))
            }
            onChange={handleChange}
            renderInput={(params) => (
                <TextField data-testid='field' {...params} variant="outlined"  />
            )}
            />;
};
