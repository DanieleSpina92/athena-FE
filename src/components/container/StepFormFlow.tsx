import React, { useState } from "react";
import { Steps, Button, Form, Input, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const stepsData = [
  { title: "Step 0 – Dati base" },
  { title: "Step 1 – Dettagli" },
  { title: "Step 2 – Conferma" },
];

export default function StepFormFlowHorizontal() {
  const [current, setCurrent] = useState(0);
  // stato completed: true solo per lo step corrente se completato
  const [completed, setCompleted] = useState<boolean[]>(stepsData.map(() => false));

  // Hook dei form
  const [form0] = Form.useForm();
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const forms = [form0, form1, form2];

  const nextStep = async (index: number) => {
    try {
      // valida il form corrente
      await forms[index].validateFields();

      // spunta solo questo step, resettando i successivi
      const newCompleted = stepsData.map((_, i) => i <= index);
      setCompleted(newCompleted);

      // vai al prossimo step
      if (index < stepsData.length - 1) {
        setCurrent(index + 1);
      }
    } catch (err) {
      console.log("Form non valido:", err);
    }
  };

  const prevStep = () => {
    // rimuove la spunta corrente
    const newCompleted = [...completed];
    newCompleted[current] = false;
    setCompleted(newCompleted);

    setCurrent((c) => Math.max(c - 1, 0));
  };

  return (
    <Card style={{ backgroundColor: "transparent", color: "#fff" }}>
      <Steps
        current={current}
        items={stepsData.map((s, i) => ({
          title: s.title,
          icon: completed[i] ? <CheckCircleOutlined style={{ color: "green" }} /> : undefined,
        }))}
      />

      <div style={{ marginTop: 24 }}>
        <Form form={forms[current]} layout="vertical">
          <Form.Item
            label={`Campo obbligatorio Step ${current}`}
            name={`field-${current}`}
            rules={[{ required: true, message: "Questo campo è obbligatorio" }]}
          >
            <Input placeholder={`Inserisci valore Step ${current}`} />
          </Form.Item>

          <div style={{ marginTop: 16 }}>
            <Button
              type="primary"
              onClick={() => nextStep(current)}
              style={{ marginRight: 8 }}
            >
              {current === stepsData.length - 1 ? "Termina" : "Avanti"}
            </Button>

            {current > 0 && (
              <Button onClick={prevStep}>
                Indietro
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Card>
  );
}
