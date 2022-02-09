/* eslint-disable testing-library/no-node-access */
/* eslint-disable jest/valid-expect */
import { screen,render, fireEvent } from "@testing-library/react";

import '@testing-library/jest-dom';
import React from "react";
import { AutoComplete} from "./AutoComplete";


describe('check autocomplete',()=>{
    test('visibility',()=>{
        render(<AutoComplete/>)
        const autocomplete=screen.getByTestId('id');
        
        expect(autocomplete).toBeVisible();
    })
})


describe('on change',()=>{
    test('event fired',()=>{
        render(<AutoComplete/>)
        const input=screen.getByRole('textbox')
        input.focus();
        fireEvent.change(document.activeElement, { target: { value: ['a','b','c'] } });
      
        expect(input.value).toContainEqual('c')
        document.activeElement.blur();
    
    })
})

describe('style chip',()=>{
    test('chip labeled',()=>{
        render(<AutoComplete/>)

       
        const chip=screen.getByTestId('0');
        expect(chip.textContent).toContain('Inception');


    })
})