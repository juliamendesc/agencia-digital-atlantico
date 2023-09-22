import React from 'react';
import MultiStepContactForm from 'src/components/ui/templates/MultiStepContactForm/MultiStepContactForm';
import { MultistepProvider } from '../context/multistepContext';

export default function FormularioGratuito() {
  return (
    <MultistepProvider>
      <MultiStepContactForm />;
    </MultistepProvider>
  );
}
