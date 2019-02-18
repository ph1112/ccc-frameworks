import Loader from "./Loader";

const { ccclass, disallowMultiple, property } = cc._decorator;

@ccclass
export default class LoaderKeeper extends cc.Component {
    private _loader: Loader = null;

    get loader(): Loader {
        return this._loader;
    }

    set loader(loader: Loader) {
        this._loader = loader;
    }

    onLoad() {

    }

    start() {

    }

    onDestroy() {
        if (this._loader) {
            this._loader.release();
            this._loader = null;
        }
    }
}