import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../actions/index';
import { dataFromSnapshot } from '../firebase-firestore/firestoreService';

export default function useFirestoreDoc({ query, data, deps, shouldExecute = true }) {
  const dispatch = useDispatch();

  useEffect(() => {
    //to break out of hook
    if (!shouldExecute) return;
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      snapshot => {
        if (!snapshot.exists) {
          dispatch(asyncActionError({code: 'not-found', message: 'This record could not be located'}));
          return;
        }
        data(dataFromSnapshot(snapshot));
        dispatch(asyncActionFinish());
      },
      error => dispatch(asyncActionError())
    );
    return () => {
      unsubscribe();
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}