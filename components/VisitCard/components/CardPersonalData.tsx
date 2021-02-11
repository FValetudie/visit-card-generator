import React from "react";

import { useCardContext } from "../CardContext";

import ColorPicker from "../../ColorPicker/ColorPicker";

export default function CardPersonalData() {
    const {
        data,
        fontStyles,
        updateData,
        setFontStyles,
    } = useCardContext();

    return (
        <div className="card-personal-data">
            <h2>Visit card owner data</h2>
            <div>
                <label htmlFor="firstname">Firstname</label>{' '}
                <ColorPicker
                    color={fontStyles?.fname?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, fname: { ...fontStyles?.fname, color }})}
                />
                <input value={data?.firstname} name="firstname" type="text" onChange={(e) => updateData({ firstname: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>{' '}
                <ColorPicker
                    color={fontStyles?.lname?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, lname: { ...fontStyles?.lname, color }})}
                />
                <input value={data?.lastname} name="lastname" type="text" onChange={(e) => updateData({ lastname: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="position">Position</label>{' '}
                <ColorPicker
                    color={fontStyles?.position?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, position: { ...fontStyles?.position, color }})}
                />
                <input value={data?.position} name="position" type="text" onChange={(e) => updateData({ position: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="company">Company</label>{' '}
                <ColorPicker
                    color={fontStyles?.company?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, company: { ...fontStyles?.company, color }})}
                />
                <input value={data?.company} name="company" type="text" onChange={(e) => updateData({ company: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="email">Email</label>{' '}
                <ColorPicker
                    color={fontStyles?.email?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, email: { ...fontStyles?.email, color }})}
                />
                <input value={data?.email} name="email" type="email" onChange={(e) => updateData({ email: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="twitter">Twitter handle</label>{' '}
                <ColorPicker
                    color={fontStyles?.twitter?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, twitter: { ...fontStyles?.twitter, color }})}
                />
                <input value={data?.twitter} name="twitter" type="text" onChange={(e) => updateData({ twitter: e.target.value }) } />
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>{' '}
                <ColorPicker
                    color={fontStyles?.phone?.color}
                    onChange={(color) => setFontStyles({ ...fontStyles, phone: { ...fontStyles?.phone, color }})}
                />
                <input value={data?.phone} name="phone" type="phone" onChange={(e) => updateData({ phone: e.target.value }) } />
            </div>
        </div>
    );
};