/**
 *
 * InspirationalBullshit
 *
 */

import React from 'react';
import styles from './styles.scss';

const bullshitExamples = [
  'Jeśli cię nie boli, znaczy że nie robisz tego dobrze.',
  'Popierdolony pomysł. Ale nie znaczy, że się nie piszę',
  'Jeśli kiedykolwiek twoje życie straci smak, nasyp se soli do dupy',
  'Czasami czuję się jak Spiderman w Radomiu',
  'Nie da się tak po prostu zapomnieć smaku styropianu',
  'Teraz prędko, zanim dotrze do nas że to jest bez sensu',
  'Zawsze pożyczaj pieniądze od pesymisty. Nie będzie spodziewał się ich zwrotu.',
  'Problem z jedzeniem kuchni włoskiej polega na tym, że pięć lub sześć dni później, jesteś znowu głodny.',
  'Zamierzam żyć wiecznie. Jak na razie idzie mi całkiem nieźle.',
  'Moim ulubionym urządzeniem na siłowni jest automat z przekąskami.',
  'Cokolwiek robisz, nie warto',
  'Nic nie budzi lepiej niż porządna lepa na ryj',
  'Nikt nie chodzi do kina z własnym barszczem w słoiku',
  'Trudu nie ma, zimy nie ma i śmierci z niedożywienia też nie ma. Ale halucynacje zostały.',
];

const InspirationalBullshit = () => (
  <div className={styles.bullshit}>
    {bullshitExamples[Math.floor(Math.random() * bullshitExamples.length)]}
  </div>
);

export default InspirationalBullshit;
