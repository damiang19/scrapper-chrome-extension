import { useEffect, useState } from "react";
import shopAllowed from './../assets/shop_supported.png'
import shopNotSupported from './../assets/shop_not_allowed.png'
import { ShopService } from "../services/Shop.service";
import type { Shop } from "../models/shop";

function ShopView() {
    const [url, setUrl] = useState<string>("");
    const [shops, setShops] = useState<any>([]);

    // useEffect(() => {
    //     chrome.storage.local.get("lastUrl", (data) => {
    //         const lastUrl = data.lastUrl as string | undefined;

    //         if (lastUrl) {
    //             setUrl(lastUrl);
    //         }
    //     });

    //     const listener = (message: any) => {
    //         if (message.type === "PAGE_CHANGED") {
    //             setUrl(message.url);
    //         }
    //     };

    //     chrome.runtime.onMessage.addListener(listener);
    //     return () => chrome.runtime.onMessage.removeListener(listener);
    // }, []);

    // czy mozliwe jest aby dodac do sledzonych 
    //
    useEffect(() => {
        async function getShopList() {
            try {
                debugger;
                const response = await ShopService.getShopList();
                setShops(response);
            } catch (error) {
                console.log(error)
            }
        }
        getShopList();
    }, []);

    function isShopHandled() {
        return shops.filter((shop: Shop) => url.startsWith(shop.name))[0];
    }

    return (
        <div className="d-flex flex-column  w-100 h-100">
            <div className="p-2 d-flex justify-content-center w-100">
                <h2>Shop site</h2>
            </div>
            <div className="bd-highlight">
                {isShopHandled() ? <img src={shopAllowed} className="w-25" /> : <img src={shopNotSupported} className="w-25" />}
            </div>
            <button disabled={false} className="">Dodaj do śledzenia</button>
        </div>
    );
}
export default ShopView