import {useRef} from 'react';
import uniqid from 'uniqid';

export const useUniqueIds = (count: number) => useRef([...new Array(Math.floor(count))].map(() => uniqid())).current;
