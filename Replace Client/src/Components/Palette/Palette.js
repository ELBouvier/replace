import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const RedRadio = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const PinkRadio = withStyles({
    root: {
      color: pink[400],
      '&$checked': {
        color: pink[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const PurpleRadio = withStyles({
    root: {
      color: purple[400],
      '&$checked': {
        color: purple[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const DeepPurpleRadio = withStyles({
    root: {
      color: deepPurple[400],
      '&$checked': {
        color: deepPurple[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const IndigoRadio = withStyles({
    root: {
      color: indigo[400],
      '&$checked': {
        color: indigo[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const LightBlueRadio = withStyles({
    root: {
      color: lightBlue[400],
      '&$checked': {
        color: lightBlue[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const CyanRadio = withStyles({
    root: {
      color: cyan[400],
      '&$checked': {
        color: cyan[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const TealRadio = withStyles({
    root: {
      color: teal[400],
      '&$checked': {
        color: teal[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const LightGreenRadio = withStyles({
    root: {
      color: lightGreen[400],
      '&$checked': {
        color: lightGreen[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const LimeRadio = withStyles({
    root: {
      color: lime[400],
      '&$checked': {
        color: lime[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
    root: {
      color: yellow[400],
      '&$checked': {
        color: yellow[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const AmberRadio = withStyles({
    root: {
      color: amber[400],
      '&$checked': {
        color: amber[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const OrangeRadio = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const DeepOrangeRadio = withStyles({
    root: {
      color: deepOrange[400],
      '&$checked': {
        color: deepOrange[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const BrownRadio = withStyles({
    root: {
      color: brown[400],
      '&$checked': {
        color: brown[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const WhiteRadio = withStyles({
    root: {
      color: grey[100],
      '&$checked': {
        color: grey[300],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const GreyRadio = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const BlackRadio = withStyles({
    root: {
      color: grey[700],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('');

  function handleChange(event) {
    setSelectedValue(event.target.value);

    console.log(event.target.value);
    console.log(event.target.name);

    sessionStorage.setItem('selectedValue', event.target.value);
    sessionStorage.setItem('selectedName', event.target.name);

    document.getElementById('testhead2').style.color = sessionStorage.getItem('selectedValue');
    document.getElementById('testhead').style.color = sessionStorage.getItem('selectedValue');
    
    document.getElementById("testhead").innerHTML = sessionStorage.getItem('selectedName');
  };

  return (
    <div>

    <RedRadio
        checked={selectedValue === 'rgb(244, 67, 54)'}
        onChange={handleChange}
        value="rgb(244, 67, 54)"
        name="Red"
        inputProps={{ 'aria-label': 'A' }}
    />

    <PinkRadio
        checked={selectedValue === '#E91E63'}
        onChange={handleChange}
        value="#E91E63"
        name="Pink"
        inputProps={{ 'aria-label': 'B' }}
            />

    <PurpleRadio
        checked={selectedValue === '#9C27B0'}
        onChange={handleChange}
        value="#9C27B0"
        name="Purple"
        inputProps={{ 'aria-label': 'C' }}
            />

    <DeepPurpleRadio
        checked={selectedValue === '#673AB7'}
        onChange={handleChange}
        value="#673AB7"
        name="Deep Purple"
        inputProps={{ 'aria-label': 'D' }}
            />

    <IndigoRadio
        checked={selectedValue === '#3F51B5'}
        onChange={handleChange}
        value="#3F51B5"
        name="Indigo"
        inputProps={{ 'aria-label': 'E' }}
            />

    <BlueRadio
        checked={selectedValue === '#2196F3'}
        onChange={handleChange}
        value="#2196F3"
        name="Blue"
        inputProps={{ 'aria-label': 'F' }}
            />

    <LightBlueRadio
        checked={selectedValue === '#03A9F4'}
        onChange={handleChange}
        value="#03A9F4"
        name="Light Blue"
        inputProps={{ 'aria-label': 'G' }}
            />

    <CyanRadio
        checked={selectedValue === '#00BCD4'}
        onChange={handleChange}
        value="#00BCD4  "
        name="Cyan"
        inputProps={{ 'aria-label': 'H' }}
            />

    <TealRadio
        checked={selectedValue === '#009688'}
        onChange={handleChange}
        value="#009688"
        name="Teal"
        inputProps={{ 'aria-label': 'I' }}
            />

    <GreenRadio
        checked={selectedValue === '#4CAF50'}
        onChange={handleChange}
        value="#4CAF50"
        name="Green"
        inputProps={{ 'aria-label': 'J' }}
            />

    <LightGreenRadio
        checked={selectedValue === '#8BC34A'}
        onChange={handleChange}
        value="#8BC34A"
        name="Light Green"
        inputProps={{ 'aria-label': 'K' }}
            />

    <LimeRadio
        checked={selectedValue === '#CDDC39'}
        onChange={handleChange}
        value="#CDDC39"
        name="Lime"
        inputProps={{ 'aria-label': 'L' }}
            />
            
    <YellowRadio
        checked={selectedValue === '#FFEB3B'}
        onChange={handleChange}
        value="#FFEB3B"
        name="Yellow"
        inputProps={{ 'aria-label': 'M' }}
            />

    <AmberRadio
        checked={selectedValue === '#FFC107'}
        onChange={handleChange}
        value="#FFC107"
        name="Amber"
        inputProps={{ 'aria-label': 'N' }}
            />

    <OrangeRadio
        checked={selectedValue === '#FF9800'}
        onChange={handleChange}
        value="#FF9800"
        name="Orange"
        inputProps={{ 'aria-label': 'O' }}
            />

    <DeepOrangeRadio
        checked={selectedValue === '#FF5722'}
        onChange={handleChange}
        value="#FF5722"
        name="Deep Orange"
        inputProps={{ 'aria-label': 'P' }}
            />

    <BrownRadio
        checked={selectedValue === '#795548'}
        onChange={handleChange}
        value="#795548"
        name="Brown"
        inputProps={{ 'aria-label': 'Q' }}
            />

    <GreyRadio
        checked={selectedValue === '#9E9E9E'}
        onChange={handleChange}
        value="#9E9E9E"
        name="Grey"
        inputProps={{ 'aria-label': 'R' }}
            />
    
    <WhiteRadio
        checked={selectedValue === '#FAFAFA'}
        onChange={handleChange}
        value="#FAFAFA"
        name="White"
        inputProps={{ 'aria-label': 'S' }}
            />

    <BlackRadio
        checked={selectedValue === '#212121'}
        onChange={handleChange}
        value="#212121"
        name="Black"
        inputProps={{ 'aria-label': 'T' }}
            />
    </div>


  );
}
