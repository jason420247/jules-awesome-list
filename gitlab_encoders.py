"""
Custom encoders for python-gitlab objects.
"""

from gitlab.base import RESTObject, RESTObjectList
from gitlab.v4.objects import Project

def gitlab_encoder(obj):
    """
    Custom encoder for python-gitlab objects.
    """
    if isinstance(obj, Project):
        return obj.attributes
    if isinstance(obj, (RESTObject, RESTObjectList)):
        return obj.asdict()
    return str(obj)
