import React from 'react';
import './home.scss';

export function Home() {

    return (
        <div>
                <section className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>Despre aplicație</h2>
                            <p>DataMVS - Medicine Verification System vine în întâmpinarea obligativității
                                verificării originii medicamentelor eliberate către pacienți în urma Directivei
                                2011/62/UE și a Regulamentului Delegat 2016/161</p>
                        </div>
                        <div className="content">
                            <div className="column">
                                <p>În urma schimbării legislației europene cu privire la prevenirea utilizării
                                    medicamentelor false pe piața europeană, instituțiile medicale sunt obligate să
                                    utilizeze platformele naționale și internaționale pentru a verifica și decomisiona
                                    medicamentele recomandate sau administrate pacienților. Astfel, DataMVS –
                                    Medicine Verification System vă pune la dispoziție următoarele facilități și
                                    servicii complete pentru a implementa cu success și rapid toate cerințele:</p>
                                <ul>
                                    <li> ֍ Aplicație mobilă pentru scanarea
                                        codurilor de pe cutiile de medicamente
                                    </li>
                                    <li> ֍ Aplicație web pentru gestionarea
                                        codurilor scanate și urmărirea statusului scanarilor
                                    </li>
                                    <li> ֍ Verificarea și decomisionarea codurilor
                                        de medicamente în platformele fiecărei țări în care activați
                                    </li>
                                    <li> ֍ Asistență la înrolarea locațiilor
                                        instituțiilor și întreținerea de LUF-uri (locațiile utilizatorilor finali)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}
