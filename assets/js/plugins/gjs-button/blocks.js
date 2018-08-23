import { cButtonRef, buttonRef } from './consts';

export default (editor, opt = {}) => {
    const c = opt;
    const bm = editor.BlockManager;
    const buttonPfx = c['buttonClsPfx'] || buttonRef;
    const style = c.defaultStyle ? `
        <style type="text/css">
        .${buttonPfx} {        
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-content: center;
            width: 239px;
            height: 65px;
	        color: #000000;
	        font-size: 20px;
	        line-height: 55px;
	        text-decoration: none;
	        cursor:pointer;
	        border-radius: 0;
        }
        
        .${buttonPfx}__button {
            display: inline-flex;
            align-content: normal;
            color: #000000;
            font-size: 24px;
            line-height: 48px;
            text-decoration: none;
            width: 100%;
            height: 100%;
            justify-content: center;
            cursor: pointer;
        }
        </style>
        ` : '';

    if (c.blocks.indexOf(cButtonRef) >= 0) {
        bm.add(cButtonRef, {
            label: c['labelButtonBlock'],
            category: c['labelButtonCategory'],
            attributes: { class: 'fa fa-hand-pointer-o' },
            content: `<div class="${buttonPfx}" data-gjs-type="gjs-button"></div>${style}`,
        });
    }
}