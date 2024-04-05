import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
import { ToastStatusProps } from '../props';

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title: string, description: string, status: ToastStatusProps) => {
      toast({
        title,
        description,
        status,
        duration: 3500,
        isClosable: true,
      });
    },
    [toast],
  );

  return showToast;
};

export default useShowToast;
