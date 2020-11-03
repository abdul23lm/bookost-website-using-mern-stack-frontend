import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconText />
                        <p className="brand-tagline">
                            Gapailah mimpi bersama kost impianmu.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            Untuk Pengguna
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    Buat Akun
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/kost">
                                    Mulai Pesan Kostan
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/metode-pembayaran">
                                    Metode Pembayaran
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            Jelajahi Kami
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/tentang-kami">
                                    Tentang Kami
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/syarat-dan-ketentuan">
                                    Syarat & Ketentuan
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">
                            Kontak
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@bookost.id">
                                    support@bookost.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+6282130314423">
                                    0821 - 3031 - 4423
                                </Button>
                            </li>
                            <li className="list-group-item">
                            <span>BooKost, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2020 • All rights reserved • BooKost
                    </div>
                </div>
            </div>
        </footer>
    )
}
