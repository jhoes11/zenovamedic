import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const LibroReclamaciones = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [tipoBien, setTipoBien] = useState("producto");
  const [tipoReclamo, setTipoReclamo] = useState("reclamo");
  const [esMenor, setEsMenor] = useState("no");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reclamación registrada",
      description:
        "Tu reclamación ha sido recibida. Te responderemos en un plazo máximo de 30 días calendario.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
            <span className="text-primary">Libro de Reclamaciones</span>
          </h1>
          <p className="text-luxury max-w-3xl mx-auto">
            Conforme al Código de Protección y Defensa del Consumidor — Ley N° 29571
            y al D.S. N° 011-2011-PCM. Todo proveedor de bienes o servicios está
            obligado a contar con un Libro de Reclamaciones. Tu reclamo será atendido
            en un plazo máximo de <strong>30 días calendario</strong>.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 space-y-10"
          >
            {/* 1. Proveedor */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">
                1. Identificación del Proveedor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-luxury bg-secondary/30 p-4 rounded-lg">
                <div><strong>Razón Social:</strong> Zenova Medic</div>
                <div><strong>RUC:</strong> 20612345678</div>
                <div><strong>Dirección:</strong> Las Diamelas 471, Santa Victoria</div>
                <div><strong>Distrito/Provincia/Región:</strong> Chiclayo, Lambayeque, Perú</div>
                <div><strong>Página Web:</strong> zenovamedic.com</div>
                <div><strong>Teléfono:</strong> +51 986 921 164</div>
              </div>
            </div>

            {/* 2. Consumidor */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">
                2. Identificación del Consumidor Reclamante
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombres">Apellidos y Nombres *</Label>
                  <Input id="nombres" required />
                </div>
                <div>
                  <Label htmlFor="dni">DNI / CE / Pasaporte *</Label>
                  <Input id="dni" required />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input id="telefono" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="direccion">Dirección (para notificaciones) *</Label>
                  <Input id="direccion" required />
                </div>
                <div>
                  <Label>¿Es menor de edad?</Label>
                  <RadioGroup
                    value={esMenor}
                    onValueChange={setEsMenor}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="menor-no" />
                      <Label htmlFor="menor-no" className="font-normal">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="menor-si" />
                      <Label htmlFor="menor-si" className="font-normal">Sí</Label>
                    </div>
                  </RadioGroup>
                </div>
                {esMenor === "si" && (
                  <>
                    <div>
                      <Label htmlFor="representante">Nombre del padre/madre/tutor</Label>
                      <Input id="representante" />
                    </div>
                    <div>
                      <Label htmlFor="dni-rep">DNI del representante</Label>
                      <Input id="dni-rep" />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 3. Bien o servicio */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">
                3. Identificación del Bien Contratado o Servicio Prestado
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>Tipo</Label>
                  <RadioGroup
                    value={tipoBien}
                    onValueChange={setTipoBien}
                    className="flex flex-wrap gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="producto" id="t-producto" />
                      <Label htmlFor="t-producto" className="font-normal">Producto (bien)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="servicio" id="t-servicio" />
                      <Label htmlFor="t-servicio" className="font-normal">Servicio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ambos" id="t-ambos" />
                      <Label htmlFor="t-ambos" className="font-normal">Producto y servicio</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="descripcion-bien">Descripción del bien / servicio *</Label>
                    <Input id="descripcion-bien" required />
                  </div>
                  <div>
                    <Label htmlFor="monto">Monto reclamado (S/)</Label>
                    <Input id="monto" type="number" step="0.01" />
                  </div>
                  <div>
                    <Label htmlFor="fecha-adq">Fecha de adquisición</Label>
                    <Input id="fecha-adq" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="pedido">N° pedido / contrato / ticket</Label>
                    <Input id="pedido" />
                  </div>
                  <div>
                    <Label htmlFor="serie">N° serie / lote</Label>
                    <Input id="serie" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Tipo de reclamación */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">
                4. Tipo de Reclamación
              </h2>
              <RadioGroup
                value={tipoReclamo}
                onValueChange={setTipoReclamo}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <label
                  htmlFor="r-reclamo"
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${tipoReclamo === "reclamo" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="reclamo" id="r-reclamo" />
                    <span className="font-semibold">RECLAMO</span>
                  </div>
                  <p className="text-sm text-luxury">
                    Disconformidad con el bien o servicio adquirido. El proveedor debe responder en 30 días.
                  </p>
                </label>
                <label
                  htmlFor="r-queja"
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${tipoReclamo === "queja" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="queja" id="r-queja" />
                    <span className="font-semibold">QUEJA</span>
                  </div>
                  <p className="text-sm text-luxury">
                    Malestar por atención, trato o incumplimiento no relacionado con el bien/servicio.
                  </p>
                </label>
              </RadioGroup>
            </div>

            {/* 5. Detalle */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">
                5. Detalle de la Reclamación
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="detalle">
                    Describa detalladamente los hechos (qué ocurrió, cuándo, cómo y qué perjuicio le causó) *
                  </Label>
                  <Textarea id="detalle" rows={5} required />
                </div>
                <div>
                  <Label htmlFor="pedido-concreto">¿Qué solicita al proveedor? *</Label>
                  <Textarea id="pedido-concreto" rows={3} required />
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground bg-secondary/30 p-4 rounded-lg">
              Al presentar esta reclamación, declaro que la información consignada es verdadera.
              Autorizo el tratamiento de mis datos personales conforme a la Ley N° 29733 — Ley de
              Protección de Datos Personales. Puede presentar su queja o reclamo también ante INDECOPI:
              www.indecopi.gob.pe | 224-7777 (Lima) | 0-800-4-4040 (gratuito en provincias).
            </div>

            <Button type="submit" className="btn-premium w-full">
              Enviar Reclamación
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LibroReclamaciones;