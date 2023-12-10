
import '@testing-library/jest-dom'
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import MenuEntryCard from "@/app/menu/MenuEntryCard";
import {MenuEntry} from "@/data/menuentry";
import {CartProvider} from "@/components/CartProvider";


/* these test simply test that testing works at all*/

test('trivialtest', () => {
    expect(true).toBe(true)
})

test("reacttest", () => {
    const entry: MenuEntry = {
        key: "one",
        description: "hello",
        label: "huhu",
        price: 100,
        image: "abc.jpg"
    }
    render(
        <CartProvider>
            <MenuEntryCard entry={entry} fadeInDelay={100} />
        </CartProvider>
    )
    const element = screen.getByText('hello')
    expect(element).toBeInTheDocument()
})
