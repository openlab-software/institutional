{{- define "institutional.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "institutional.labels" -}}
app: {{ include "institutional.name" . }}
{{- end -}}
